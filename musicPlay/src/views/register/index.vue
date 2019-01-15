<template>
	<div>
		<div class="info">
			<h3>用户注册</h3>
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
						<td>再次输入密码：</td>
						<td><input type="text" v-model="repassword" placeholder="密码"/></td>
					</tr>
					<tr>
						<td>邮箱：</td>
						<td><input type="text" v-model="userMail" placeholder="邮箱"/></td>
					</tr>
					<tr>
						<td>手机：</td>
						<td><input type="text" v-model="userPhone" placeholder="手机"/></td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" @click="userRegister"   value="注册"/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				username:"",
				password:"",
				userMail:"",
				userPhone:"",
				repassword:""
			}
		},
		methods:{
			userRegister:function(event){
				if(this.password != this.repassword){
					alert("两次密码不一致")
				}else{
					let sendDate = {
						username:this.username,
						password:this.password,
						userMail:this.userMail,
						userPhone:this.userPhone
					}
					this.$http.post('http://localhost:3000/users/register',sendDate).then(res=>{
						console.log(res)
						if(res.data.status==1){
							alert(res.data.message)
						}else{
							alert(res.data.message)
							this.$router.go(-1)
						}
					})
				}
			}
		}
	}
</script>

<style scoped>
			.info{
				width:100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				background-image: url('../../../static/img/gb.jpg');
				background-size: 100% 100%;
				overflow: hidden;
			}
			.info>h3{
				margin: 10px 0;
				text-align: center;
				position: relative;
			}
			.info>h3:before{
				/*当作线段*/
				content: "";
				width: 400px;
				height: 2px;
				background-color: #000;
				position: absolute;
				left: 0px;
				top: 14px;
			}
			.info>h3:after{
				content: "用户注册";
				width: 100px;
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
			tr>td:last-child{
				text-align: center;
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