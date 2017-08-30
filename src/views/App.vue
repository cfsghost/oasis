<template>
	<div class="layout">
		<div class="content">
			<mu-appbar title="Oasis" class="appnav">
				<mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
				<mu-flat-button label="expand_more" slot="right"/>
				<mu-icon-button icon="expand_more" slot="right"/>
			</mu-appbar>
		</div>
		<mu-drawer :open="open" class="sidemenu" :zDepth="1">
			<mu-appbar title="Oasis">
			</mu-appbar>
			<mu-divider/>
			<div class="sidemenu-content">
				<mu-list>
					<mu-list-item title="Test">
					</mu-list-item>
					<mu-list-item title="Test2">
					</mu-list-item>
				</mu-list>
			</div>
		</mu-drawer>
	</div>
</template>
<script>

export default {
	data() {
		return {
			open: true
		};
	},
	methods: {
		toggleNav () {
			this.open = !this.open;
		}
	}
};
</script>

<style lang="less">
@import '../../node_modules/muse-ui/src/styles/import.less';

.layout {
}

.appnav {
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
//	width: 256px;
}

.sidemenu.mu-appbar {
	flex-shrink: 0;
}
</style>
