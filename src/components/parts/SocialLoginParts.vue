<template>
	<v-container :fluid="fluid" class="pa-0 pt-10 social-login-parts">
		<div>
			<a href="http://localhost:8080/oauth2/authorization/google?redirect_url=http://localhost:5173"
			class="btn btn-success active"
			role="button"
		>
			<v-btn block>
				구글 계정으로 로그인
			</v-btn>
		</a>
		</div>
	</v-container>
</template>


<script setup>

</script>

<style scoped>
.social-login-parts a{
	text-decoration: none;
}
.social-login-parts > * {
	margin-bottom: 10px;
}

.social-login-parts .v-btn {
	letter-spacing: 0;
}
</style>
