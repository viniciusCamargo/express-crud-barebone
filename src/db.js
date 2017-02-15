import monk from 'monk'

export const db = monk('mongodb://<dbuser>:<dbpassword>@<mongo-instance>/<database>')
export const collection = db.get('documents')
