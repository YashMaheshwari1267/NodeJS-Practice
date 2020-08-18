var Student = (function defineStudent(){   
    var records = [
        {id: 11, name: "yash",grade:90},
        {id: 12, name: "vipul",grade:80},
        {id: 13, name: "vishal",grade:70},
        {id: 14, name: "vinay",grade:60},
        {id: 15, name: "vidit",grade:85},
    ];

     var publicAPI = {
     getName
     };
     console.log(publicAPI);
    return publicAPI;

    function getName(studentID){
        var student = records.find(
            student => student.id==studentID
        );
        return student.name;
    }

})();
console.log(Student.publicAPI);
console.log(Student.getName(11));