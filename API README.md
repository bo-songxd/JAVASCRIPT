# API documentation
# Tree Hollow
## Tree Hollow Project API
------
### User
+ [POST/login]()

### Subject
+ [POST/subject]()
+ [GET/searchsubject]()
+ [GET/deletesubject]()
+ [GET/listsubject]()
### Diary
+ [POST/diary]()
+ [POST/editdiary]()
+ [GET/editbydate]()
+ [GET/editbysubject]()

### Date
+ [POST/date]()
+ [GET/time]()
+ [GET/search]()
+ [GET/deletedate]()
+ [GET/listdate]()




### POST/login
+ This api is for login to use the full function of the website.
+ By submitting username and password.
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| username     | string|yes|username
| password     | string|yes      |   password|

#### Response
```
'success'
```

### POST/subject
+ This api is add new subject of new diary.
+ By submitting the new subject you want.
#### Parameter

| id        | type|required           | description  |
| -------------| |:-------------:| -----:|
| subject     | string|yes|subject


#### Response
```
'success'
```
### GET/searchsubject
+ This api is for check whether the specific diary existed by searching providing subject

#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| searchsubject    | string|yes|subject


#### Response
```
'success'
```
### GET/deletesubject
+ This api is for delete the diary by providing the subject

#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| deletesubject     | string|yes|subject


#### Response
```
'success'
```
```
'fail'
```
### GET/listsubject
+ This api is for delete the diary by providing the subject

#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| subject     | string|yes|subject


#### Response
```
'success'
```
### POST/diary
+ This api is for add your new diary
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| newdiary1    | string|yes|diary


#### Response
```
'success'
```

### POST/editdiary
+ This api is for editing your existing diary and subject
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| editdiary1    | string|yes|diary
| checksubject     | string|yes      |  subject|

#### Response
```
'success'
```
```
'fail'
```
### GET/editbydate
+ This api is for getting diary by submitting date
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| editdate     | string|yes|date


#### Response
```
'success'
```
```
'fail'
```
### GET/editbysubject
+ This api is for getting diary by submitting subject
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|

| editsubject     | string|yes      |  subject|

#### Response
```
'success'
```
### POST/date
+ This api is for adding new date with new diary
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| date     | string|yes|date


#### Response
```
'success'
```
```
'fail'
```

### GET/time
+ This api is for getting time by ip by using external web service
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| ip     | string|yes|ip


#### Response
```
'success'
```
```
'fail'
```
### GET/search
+ This api is for searching the new diary by submitting the date
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| searchtime    | string|yes|date


#### Response
```
'success'
```
```
'fail'
```
### GET/deletedate
+ This api is for deleting the existing diary by submitting the date
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| deletedate    | string|yes|date


#### Response
```
'success'
```
```
'fail'
```
### GET/listdate
+ This api is for listing the existed diary by submitting the date
#### Parameter

| id        | type|required           | description  |
| ------------- |---|:-------------:| -----:|
| date    | string|yes|date


#### Response
```
'success'
```
```
'fail'
```
