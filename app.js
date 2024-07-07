async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
fetchUserData();
