# http协议的主要特点？
- 无连接
- 无状态
- 简单快速
# http报文的组成部分？
- 请求报文
  - 请求行、请求头、空行、请求体  
- 响应报文
  - 状态行、相应头、空行、响应体
# http 方法
- GET  获取资源
- POST 传输资源
- PUT   更新资源
- DELETE 删除资源
- HEAD   获取报文首部
# http 状态码
- 1xx: 指示信息
- 2xx: 成功
  - 200 客户端请求成功
- 3xx: 重定向提示
  - 301 所有请求页面已经永久转移到新url(永久重定向)
  - 302 所有请求页面临时转移(临时重定向)
- 4xx: 客户端错误
  - 400 客户端请求有语法错误
  - 401 请求未经授权
  - 403 访问被禁止
  - 404 请求资源不存在
- 5xx: 服务端错误
  - 500 服务端发生错误
  - 503 请求未完成，服务器临时过载
# 什么持久连接？
http 1.1版本后,当使用 Keep-Alive模式(持久连接)时,使客户端到服务端的连接持续有效,它避免了重新新建连接开销。
# 什么是 管道化？
**持久连接非管道化请求**

请求1->响应1->请求2->响应2->请求3->响应3

**管道化请求**
请求1->请求2->请求3->响应1->响应2->响应3

- 管道化机制通过持久化连接完成，仅HTTP/1.1支持此技术
- 只有GET和HEAD请求可以进行管线化
- 服务端必须支持
#  URL、URI、URN
1.  URI:Uniform Resource Identifier 统一资源标志符
    1. 用于唯一标示互联网上的信息资源
    2. 包含 URL和URN
2.  URL:Uniform Resource Locator 统一资源定位器
3. URN 永久统一资源符

# http2 与 http1.1区别
http2 优势
    1. 信道复用
    2. 分贞传输
    3. server push

# 输入url后http请求完整过程？
首先 redirect(跳转) --> DNS(DNS解析） --> TCP(创建TCP链接)-->Request(发送请求) --> Response(接受相应)--> 浏览器解析