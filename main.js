
        const container = document.getElementById("container");
        
        const modules = [
            { "name": "ITC1013 Mathematics (1)", "code": "ITC1013" },
            { "name": "ITC1082 Communication skills (I)/English", "code": "ITC1082" },
            { "name": "ITC1023 Physics for Technology", "code": "ITC1023" },
            { "name": "ITC1063 Fundamentals of Programming", "code": "ITC1063" },
            { "name": "ITC1052 Software Engineering", "code": "ITC1052" },
            { "name": "ITC1032 Principles of Statistics", "code": "ITC1032" },
            { "name": "ITC1042 Computer Systems Organization", "code": "ITC1042" },
        ];

        function createTable(modules) {
            const table = document.createElement("div");
            table.classList.add("table");
            table.innerHTML = `
            <center>
            <h2>Faculty of Technology</h2>
            <h3>University of Sri Jayewardenepura</h3>
            <img src="University_of_Sri_Jayewardenepura_crest.png" alt="logo">
            <h4>1<sup>st</sup> Year 1<sup>st</sup> Semester GPA Calculator</h4>
            </center><br />
            <div id="content"></div>
            <div class="tr">
                <div class="col" id="btn-section">
                    <button onclick="start(modules)">Calculate</button>
                </div>
            </div>
            <div id="gpa-display">Overall GPA : 4.00</div>
            <small>Powered By Thilina Jayamal</small>
            `;

            container.append(table);
            
        }

        function start(modules) {
            let totalGPA = 0;
            let totalCredit = 0;
            const gpaDisplay = document.getElementById("gpa-display");

            modules.forEach((module) => {
                let inputValue = Number.parseFloat(document.getElementById(module.code).value);
                let credit = Number.parseFloat((module.code).charAt(6));
                totalGPA += inputValue * credit;
                totalCredit += credit;
            })
            totalGPA = (totalGPA / totalCredit).toFixed(2);
            gpaDisplay.textContent = `Overall GPA : ${totalGPA}`;
        }

        function displaySelection(modules) {
            modules.forEach(module => {
                const content = document.getElementById("content");
                const rowItem = document.createElement("div");
                rowItem.classList.add("tr");
                content.append(rowItem);

                const colItem1 = document.createElement("div");
                colItem1.classList.add("col");
                colItem1.innerHTML = `
                    <select id="${module.code}">
                        <option value="4">A/A+</option>
                        <option value="3.7">A-</option>
                        <option value="3.3">B+</option>
                        <option value="3">B</option>
                        <option value="2.7">B-</option>
                        <option value="2.3">C+</option>
                        <option value="2">C</option>
                        <option value="1.7">C-</option>
                        <option value="1.3">D+</option>
                        <option value="1">D</option>
                        <option value="0">E</option>
                    </select>
            `
                rowItem.append(colItem1);

                const colItem2 = document.createElement("div");
                colItem2.classList.add("col");
                colItem2.textContent = module.name;
                rowItem.append(colItem2);
            });
        }

        createTable(modules);
        displaySelection(modules);
        
