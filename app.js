async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].id);
                console.log(data[i].name);
                console.log(data[i].address.city);
                const row = document.createElement("tr");
                const column1 = document.createElement("td");
                column1.textContent = data[i].id
                const column2 = document.createElement("td");
                column2.textContent = data[i].name
                const column3 = document.createElement("td");
                column3.textContent = data[i].address.city
                row.appendChild(column1)
                row.appendChild(column2)
                row.appendChild(column3)
                document.getElementById("table-container").appendChild(row)
              }
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
fetchUserData();

