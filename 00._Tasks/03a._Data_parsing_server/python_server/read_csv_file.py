import csv
from Person import Person

def read_csv(file_path):
    data = []
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Creating Person object for each row
            person = Person(
                name=f"{row['firstname']} {row['lastname']}",
                age=int(row['age']),
                height_in_cm=int(row['heightInCm']),
                hobbies=[hobby.strip() for hobby in row['hobbies'].split(',')],
                address={
                    'street': row['address_street'],
                    'city': row['address_city'],
                    'zipcode': row['address_zipcode']
                }
            )
            data.append(person)
    return data
