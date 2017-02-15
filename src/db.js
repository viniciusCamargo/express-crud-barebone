import monk from 'monk'

export const db = monk('mongodb://<dbuser>:<dbpassword>@<mongo-instance>/<collection>')
export const collection = db.get('documents')
