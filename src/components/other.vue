<template>
	<div>
		<h1>Other</h1>
		<button @click="ligon">点击去登陆</button>
		
		<button @click="timeSelect">选择时间</button>
		
		<mt-popup
		  v-model="popupVisible"
		  position="bottom">
			<div>开始日期</div>
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			<!-- <div class="startTime">
				<mt-datetime-picker
				class="start1"
				@confirm="selectSure"
				ref="pickerStart"
				type="date"
				v-model="pickerValue1"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日">
				</mt-datetime-picker>
			</div> -->
			<div>结束日期</div>
			<div class="endTime">
				<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
				<!-- <mt-datetime-picker
				class="end1"
				@confirm="selectSure"
				@close="close"
				ref="pickerEnd"
				type="date"
				v-model="pickerValue2"
				year-format="{value} 年"
				month-format="{value} 月"
				date-format="{value} 日">
				</mt-datetime-picker> -->
			</div>
		</mt-popup>
		
		<ul>
		  <template v-for="item in items">
			<li>{{ item }}</li>
			<li class="divider" role="presentation"></li>
		  </template>
		</ul>
		
		<!-- 跨域測試 -->
		<button @click="proxyData">点击跨域請求数据</button>
	</div>
</template>

<script>
	// import { DatetimePicker } from 'mint-ui';
	
	export default {
		data() {
			return {
				items: [1,2,3,4,5],
				pickerValue1: '',
				pickerValue2: '',
				popupVisible: false,
				sheetVisible: false,
				slots: [
					{
					  flex: 1,
					  values: ['2009','2010','2011','2012','2013','2014','2015', '2016', '2017', '2018', '2019', '2020'],
					  className: 'slot1',
					  textAlign: 'center'
					}, {
					  divider: true,
					  content: '',
					  className: 'slot2'
					}, {
					  flex: 1,
					  values: ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12'],
					  className: 'slot3',
					  textAlign: 'center'
					},{
					  flex: 1,
					  values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
					  className: 'slot4',
					  textAlign: 'center'
					}
				  ]
			};
		},
		methods: {
			//跨域请求数据
			
			proxyData(){
				this.$api.get('/api/',{params:'jsonpCallback'}).then(res =>{
					console.log(res)
				})
			},
			
			onValuesChange(picker, values) {
				console.log(picker, values)
// 			  if (values[0] > values[1]) {
// 				picker.setSlotValue(1, values[0]);
// 			  }
			},
			ligon() {
				this.$router.push('/login')
			},
			timeSelect() {
				console.log('open')
				this.popupVisible = true
// 				this.$refs.pickerStart.open();
// 				this.$refs.pickerEnd.open();
			},
			selectSure() {
				console.log(this.pickerValue,'123')
			},
			close(){
				console.log('close')
			}
		},
	}
</script>

<style lang="scss">
.mint-popup-bottom {
	padding: 0 10px;
	width:100%;
	height: 100%;
	.v-modal {
		// height:50%;
		background: none;
	}
	.startTime {
		position: relative;
		border: solid 1px back;
		overflow: hidden;
		width: 100%;
		height:40%;
		.start1 {
			height:100%;
			// margin-bottom:80%;
		}
	}
	.endTime {
		position: relative;
		border: solid 1px back;
		overflow: hidden;
		width: 100%;
		height: 100%;
		z-index: 10000;
		.end1 {
			height:50%;
		}
	}
	
}
</style>
