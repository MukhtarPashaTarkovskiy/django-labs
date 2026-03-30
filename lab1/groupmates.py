groupmates = [
    {
        "name": "Михаил",
        "group": "2251",
        "age": 22,
        "marks": [4, 3, 5, 5, 4],
    },
    {
        "name": "Ольга",
        "group": "2251",
        "age": 21,
        "marks": [3, 2, 3, 4, 3],
    },
    {
        "name": "Георгий",
        "group": "2252",
        "age": 19,
        "marks": [3, 5, 4, 3, 5],
    },
    {
        "name": "Валентин",  
        "group": "2253",
        "age": 18,
        "marks": [5, 5, 5, 4, 5],
    },
    {
        "name": "Леонид",  
        "group": "2254",
        "age": 18,
        "marks": [3, 3, 3, 3, 5],
    },
]
 


def print_students(students):
     print("Имя студента".ljust(15), 
     "Группа".ljust(8), 
     "Возраст".ljust(8), 
     "Оценки".ljust(20))
     for student in students:
         print(\
         student["name"].ljust(15), \
         student["group"].ljust(8), \
         str(student["age"]).ljust(8), \
         str(student["marks"]).ljust(20)) 
         print("\n") 

   
def filter_students_by_average(students,avg_mark):
    result = [] 
    
    for student in students:
        total = 0
        i = 0
        for mark in student["marks"]:
               total += mark
               i +=1
        total = total / i
        if total > avg_mark:
            result.append(student)
    return result       
    
avg_arr = filter_students_by_average(groupmates,4) 

def print_result(avg):
    for i in avg:
      print(i["name"])

print_result(avg_arr)



      


