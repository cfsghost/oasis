<template>
	<div class="layout">
		<mu-appbar title="Oasis" :zDepth="0" class="appnav" :class="{'nav-hide': !open}">
			<mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
			<mu-icon-button icon="expand_more" slot="right"/>
		</mu-appbar>
		<mu-drawer :open="open" class="sidemenu" :zDepth="1">
			<mu-appbar title="Oasis" :zDepth="0">
			</mu-appbar>
			<mu-divider/>
			<div class="sidemenu-content">
				<mu-list>
					<mu-list-item title="General" toggleNested>
						<mu-list-item slot="nested" title="Sign in" />
						<mu-list-item slot="nested" title="Sign up" />
					</mu-list-item>
				</mu-list>
			</div>
		</mu-drawer>
		<div class="content" :class="{'nav-hide': !open}">
			{{ source }}
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import SwaggerParser from 'swagger-parser/dist/swagger-parser.min.js';

export default {
	data() {
		return {
			open: true,
			source: ''
		};
	},
	methods: {
		toggleNav () {
			this.open = !this.open;
		}
	},
	mounted() {
/*
		// Loading API documnet
		axios.get('/api.yaml').then((res) => {
			let apiObj = SwaggerParser.parse(res.data);

			console.log(apiObj);
			SwaggerParser.validate(apiObj)
				.then((data) => {
					this.source = data;
				});
		});
*/
		SwaggerParser.parse('api.yaml')
			.then((data) => {
			console.log(data);
				this.source = data;
			})
			.catch((e) => {
				console.log(e);
			});
	}
};
</script>

<style lang="less">
@import '../../node_modules/muse-ui/src/styles/import.less';

.layout {
}

.content {
	width: auto;
	padding-left: 256px;
	transition: all .45s @easeOutFunction;
	&.nav-hide {
		padding-left: 0;
	}
}

.mu-appbar.appnav {
	position: fixed;
	left: 256px;
	right: 0;
	top: 0;
	width: auto;
	transition: all .45s @easeOutFunction;
	&.nav-hide {
		left: 0;
	}
}

.sidemenu-content {
	flex: 1;
	.scrollable();
	.no-scrollbar();
}

.sidemenu {
	display: flex;
	flex-direction: column;
	&.mu-appbar {
		flex-shrink: 0;
	}
}
</style>
