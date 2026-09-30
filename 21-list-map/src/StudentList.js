import React from 'react';

const students = ['Enes', 'Ahmet', 'Elif', 'Ayşe'];

function StudentList() {
  return (
    <div>
      <h1>Öğrenci Listesi</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;