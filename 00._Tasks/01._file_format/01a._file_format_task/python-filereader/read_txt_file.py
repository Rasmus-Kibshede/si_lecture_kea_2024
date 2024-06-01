def read_txt(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()
        json_objects = []
        for line in lines:
            data = line.strip().split(". ")
            json_objects.append({
                "name": data[0],
                "age": int(data[1].split()[0])
            })
    return json_objects

print(read_txt("../../me.txt"))
