import csv
import json

dict = {}

with open('crimestats.csv') as csvfile:
    crimereader = csv.DictReader(csvfile)
    for row in crimereader:
        dict[int(row['zipcode'])] = float(row['crime'])
        if int(row['zipcode']) == 02142:
            print "ok"

csvfile.close()

with open('crimestats.json', 'w') as outfile:
    json.dump(dict, outfile)

outfile.close()
