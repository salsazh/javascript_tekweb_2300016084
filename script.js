document.addEventListener('DOMContentLoaded', function () {
    var UkuranFont = document.getElementById('fontSize'); 
    var WarnaBackground = document.getElementById('BackgroundColor'); 
    var AktifkanModeGelap = document.getElementById('toggleDarkMode'); 
    var GayaFont = document.getElementById('fontStyle'); 
    var body = document.body;
    

    WarnaBackground.addEventListener('change', function () {
        if (WarnaBackground.value === 'default') {
            body.style.backgroundImage = "url('background.jpg')";
            body.style.backgroundColor = '';
        } else {
            body.style.backgroundImage = 'none';
            body.style.backgroundColor = WarnaBackground.value;
        }
    });       

    UkuranFont.addEventListener('input', function () {
        body.style.fontSize = UkuranFont.value + 'px';
        Container.style.fontSize = UkuranFont.value + 'px';
    });

    GayaFont.addEventListener('change', function () {
        body.style.fontFamily = GayaFont.value;
        Container.style.fontFamily = GayaFont.value;
    });

    AktifkanModeGelap.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            body.style.backgroundColor = '#333';
            body.style.color = 'white';
            AktifkanModeGelap.textContent = 'Nonaktifkan Mode Gelap';
        } else {
            body.style.backgroundColor = WarnaBackground.value;
            body.style.color = 'black';
            AktifkanModeGelap.textContent = 'Aktifkan Mode Gelap';
        }   
    });
});

document.getElementById('addTaskBtn').addEventListener('click', function() {
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.classList.add('to-do-item');
        li.textContent = taskInput.value;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            const newTask = prompt('Edit list:', li.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                li.childNodes[0].nodeValue = newTask; 
            }
    });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.addEventListener('click', function() {
            li.remove();
    });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    
        taskInput.value = '';
    }
});


