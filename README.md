## CÀI ĐẶT
# Khởi tạo Node
npm init

# nodemon sẽ giúp mình theo dõi các thay đổi đối với ứng dụng của mình bằng cách xem các tệp đã thay đổi và tự động khởi động lại máy chủ.
npm install --save-dev nodemon  

# express sẽ được sử dụng để tạo máy chủ
npm install express --save

# Tạo khung ứng dụng express
npm install express-generator -g
express -h
express --view=pug

# dotenv để mình thêm các config cho database(host, port, user, pass, ...) và các config khác
npm install dotenv --save