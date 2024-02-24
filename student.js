document = document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var number = document.querySelector("#number").value;
    var city = document.querySelector("#city").value;
    var rollNo = document.querySelector("#rollNo").value;

    var studentObj = {
        name: name,
        number: number,
        city: city,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}

function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.number;
        var td4 = document.createElement("td");
        td4.innerHTML = item.city;
        var td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button >Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        
        });
        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);
 document.getElementById('showPieChartButton').addEventListener('click', function() {
            document.getElementById('pieChartContainer').style.display = 'block';
            renderPieChart();
          });
      
          function renderPieChart() {
            const attendanceData = [
              { date: '2024-02-20', present: 25, absent: 5 },
              { date: '2024-02-21', present: 20, absent: 10 },
              { date: '2024-02-22', present: 22, absent: 8 }
            ];
      
            let totalPresent = 0;
            let totalAbsent = 0;
      
            attendanceData.forEach(day => {
              totalPresent += day.present;
              totalAbsent += day.absent;
            });
      
            const averagePresent = totalPresent / attendanceData.length;
            const averageAbsent = totalAbsent / attendanceData.length;
      
            const ctx = document.getElementById('averagePieChart').getContext('2d');
            const averagePieChart = new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['Present', 'Absent'],
                datasets: [{
                  label: 'Average Attendance',
                  data: [averagePresent, averageAbsent],
                  backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                  ],
                  borderWidth: 1
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false
              }
            });
          }


