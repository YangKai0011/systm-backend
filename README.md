# systm-backend

## 框架
express
### 接口
#### 查询
mold=1
type=search&年级=16(楼号，宿舍号)
type=search&专业=xxxx(楼号，宿舍号) 
type=search&年级=16&专业=xxxx(楼号，宿舍号)

mold=2
type=search&宿舍号=444(学生信息)
type=search&宿舍号=16&楼号=xxxx(学生信息)

mold=3
type=search&宿管号=7&宿舍号=444(学生信息)
type=search&宿管号=7&年级=16(学生信息)
type=search&宿管号=7&系别=xxx(学生信息)
type=search&宿管号=7&专业=xxxx(学生信息)
type=search&宿管号=7&年级=16&系别=xxx&专业=xxxx(学生信息)
type=search&宿管号=7&学号=444(学生信息)
type=search&宿管号=7&姓名=xx(学生信息)
type=search&宿管号=7&姓名=xx&学号=444(学生信息)

请求路径: /student?mold:可选type=search&grade:可选&profession:可选        
返回回结果: '[{"buildnumber":1,"Dormitorynumber":515},{"buildnumber":2,"Dormitorynumber":515}]'

请求路径: /student?mold:可选type=search&dormitorynumber:可选&buildnumber:可选
返回结果: '[{"id":5,"studentid":"00000004","NAME":"柯南","department":"警察系","profession":"刑侦","grade":"大二","class":"刑侦3班","buildnumber":2,"dormitorynumber":515,"tellphone":"12545891251","tourguidename":"毛利兰","tourguidephone":"12357895115","dormmanager":"工藤新一","dormmanagerphone":"70201452012","fatherphone":"36259178521","motherphonr":"36254045281","stubnumber":2,"photo":null}]'

请求路径: /student?mold:可选type=search&stubnumber:可选&dormitorynumber:可选
返回结果: '[{"id":2,"studentid":"00000001","NAME":"一一","department":"计算机系","profession":"软件工程","grade":"大二","class":"软工1班","buildnumber":1,"dormitorynumber":517,"tellphone":"12545841231","tourguidename":"二二","tourguidephone":"12354595145","dormmanager":"三三","dormmanagerphone":"35201452012","fatherphone":"31254178521","motherphonr":"36254145481","photo":null}]'

请求路径:/student?mold:可选&type=search&stubnumber:可选&department:可选&profession:可选&grade:可选
返回结果:'[{"id":6,"studentid":"00000005","NAME":"桐谷和人","department":"警察系","profession":"经侦","grade":"大三","class":"经侦1班","buildnumber":1,"dormitorynumber":104,"tellphone":null,"tourguidename":null,"tourguidephone":null,"dormmanager":null,"dormmanagerphone":null,"fatherphone":null,"motherphonr":null,"photo":null}]'

请求路径: /student?mold:可选&type=search&stubnumber:可选&studentid:可选&name:可选
返回结果:'[{"id":3,"studentid":"00000002","NAME":"独孤求败","department":"计算机系","profession":"软件工程","grade":"大一","class":"软工1班","buildnumber":1,"dormitorynumber":515,"tellphone":"12545841051","tourguidename":"令狐冲","tourguidephone":"02357895145","dormmanager":"岳不群","dormmanagerphone":"10201452012","fatherphone":"96254178521","motherphonr":"31254145281","photo":null}]'

