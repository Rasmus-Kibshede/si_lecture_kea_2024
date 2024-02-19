from dotenv import dotenv_values

env_variables = dotenv_values()
print(env_variables["MYSQL_PASSWORD"])

