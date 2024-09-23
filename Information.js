function myFunction() {
    alert("Success");
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const description = document.getElementById('description-select').value;
    const recommend = document.querySelector('input[name="recommend"]:checked')?.value || "Not specified";
    const comments = document.getElementById('comments').value;
    
    // Get selected languages
    const languages = [];
    document.querySelectorAll('input[name="languages"]:checked').forEach((checkbox) => {
        languages.push(checkbox.value);
    }); 

    // Create a new row and cells
    const table = document.getElementById('infoTable');
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const emailCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const descriptionCell = newRow.insertCell(3);
    const recommendCell = newRow.insertCell(4);
    const languagesCell = newRow.insertCell(5);
    const commentsCell = newRow.insertCell(6);

    // Set cell values
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    ageCell.innerHTML = age;
    descriptionCell.innerHTML = description;
    recommendCell.innerHTML = recommend;
    languagesCell.innerHTML = languages.join(', ') || "None";
    commentsCell.innerHTML = comments;

    // Clear the form
    document.getElementById('infoForm').reset();
}
