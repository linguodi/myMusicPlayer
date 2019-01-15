<template lang="html">
		<div>
		<div class="info">
			<h3>用户登陆</h3>
			<table>
				<tbody>
					<tr>
						<td>姓名：</td>
						<td><input type="text" v-model="username" placeholder="用户名"/></td>
					</tr>
					<tr>
						<td>密码：</td>
						<td><input type="text" v-model="password" placeholder="密码"/></td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" @click="userLogin"  value="登录"/>
							<input type="submit" @click="userRegister"   value="注册"/>
							<input type="submit"  @click="findBackPassword"  value="忘记	密码"/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		</div>
</template>
<script>
  export default {
    data(){
      return{
        username:'',
        password:'',
      }
    },
    methods:{
      userLogin:function (event) {
      this.$http.post('http://localhost:3000/users/login',{username: this.username,password:this.password}).then((res) => {
//    	console.log(res)
        if(res.data.status==1){
          alert(res.data.message)
        }else{
          let save_token={
            token:res.data.data.token,
            username: this.username,
          }
          localStorage.setItem('token',res.data.data.token);
          localStorage.setItem('username',res.data.data.user[0].username);
          localStorage.setItem('_id',res.data.data.user[0]._id);
          this.$router.go(-1)
          return this.$store.commit("isShowUser",{isShowUserInfo:true,isShowUser:false})
        }
      })
    },
//      注册跳转页面
      userRegister:function (event) {
        this.$router.push({path:'register'})
      },
//      找回密码
      findBackPassword:function (event) {
        this.$router.push({path:'findPassword'})
      }
  }

  }
</script>
<style scoped>
			.info{
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				background-image: url('../../../static/img/gb.jpg');
				background-size: 100% 100%;
				
			}
			.info>h3{
				margin: 10px 0;
				text-align: center;
				position: relative;
			}
			.info>h3:before{
				/*当作线段*/
				content: "";
				width: 100%;
				height: 2px;
				background-color: #000;
				position: absolute;
				left: 0px;
				top: 14px;
			}
			.info>h3:after{
				content: "用户登录";
				width: 30%;
				height: 30px; 
				background-color: #fff;
				position: absolute;
				left: 50%;
				margin-left: -50px;
			}
			table{
				margin: 50px auto 0 auto;
				color: #fff;
			}
			tr{
				line-height: 36px;
			}
			tr>td:first-child{
				text-align: right;
			}
			[type="text"],[type="password"]{
				width: 200px;
				height: 30px;
				border: none;
				outline: none;/*外边框*/
				border-bottom: 2px solid #999;
				background:transparent;
			}
			[type="submit"]{
				width:65px;height:30px;
				margin-top: 40px;
				border-radius: 5px;
				border:1px solid #999999;
				background:transparent;
				color: #fff;
			}
			[type="submit"]:hover{background-color:#999999 ;}
</style>


