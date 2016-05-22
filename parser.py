import csv
import json

dict = {}
dict2 = {}

with open('crimestats.csv') as csvfile:
    crimereader = csv.DictReader(csvfile)
    for row in crimereader:
        dict[int(row['zipcode'])] = float(row['crime'])
        if int(row['zipcode']) == 02142:
            print "ok"

csvfile.close()

with open('crimestatstime.csv') as csvfile:
    crimeTime = csv.DictReader(csvfile)
    for row in crimeTime:
        dict2[int(row['time'])] = float(row['multiplier'])

csvfile.close()

with open('crimestats.json', 'w') as outfile:
    json.dump(dict, outfile)

outfile.close()

with open('crimestatstime.json', 'w') as outfile:
    json.dump(dict2, outfile)

outfile.close()
