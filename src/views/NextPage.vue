<script setup>
import FancyButton from "../components/FancyButton.vue";
import SearchBar from "../components/SearchBar.vue";
import CategoryButton from "../components/CategoryButton.vue";

const srcs = ["adasd", "adsasdas", "hello"];
const catos = [
	"法律與賠償問題",
	"政府組織職責",
	"城市建設規劃",
	"文化教育活動",
	"環境衛生管理",
	"交通設施服務",
	"社會福利服務",
	"經濟發展就業",
	"科技通訊問題",
	"安全應急管理",
];
</script>

<template>
	<div>
		<FancyButton v-for="src in srcs" :key="src" :title="src" content="好玩"
			>helasdasd</FancyButton
		>
		<RouterLink to="/">Home</RouterLink>
		<SearchBar></SearchBar>
	</div>
	<div class="content">
		<div class="category">
			<h2>類別</h2>
			<CategoryButton
				v-for="cato in catos"
				:key="cato"
				:title="cato"
			></CategoryButton>
		</div>
		<div class="rightWrapper">
			<div class="hotQuestion">
				<h2>熱門問題</h2>
				<div class="threespure">
					<div id="topOne">
						<h2>Top 1</h2>
						<p>
							外國人如果結婚來臺灣或在臺灣長期工作，想要辦理中華民國身分證，要準備哪些文件才能辦理？
						</p>
					</div>
					<div id="topTwo">
						<h2>Top2</h2>
						<p>
							臺北市「歸化取得我國國籍者基本語言能力及國民權利義務基本常識測試」自104年2月起改採隨到隨辦方式舉行，報名時間為本市各區戶政事務所辦公時間(週一至週五......臺北市「歸化取得我國國籍者基本語言能力及國民權利義務基本常識測試」自104年2月起改採隨到隨辦方式舉行，報名時間為本市各區戶政事務所辦公時間(週一至週五......
						</p>
					</div>
					<div id="topThree">
						<h2>Top3</h2>
						<p>
							外國人如果結婚來臺灣或在臺灣長期工作，想要辦理中華民國身分證，要準備哪些文件才能辦理？
						</p>
					</div>
				</div>
			</div>
			<div class="answer">
				<h2>XXX類</h2>
				<div id="first">
					<div id="containerOne">
						<h3 id="question">
							很多企業為了避免員工上下班時段大眾運輸工具人潮眾多，增加感染風險，打算提早或延後兩小時上班，讓員工避開尖峰時段。如果要做這樣的調整，要注意些什麼嗎？
						</h3>
					</div>
					<div id="fontPlus">
						<button id="plusBtn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#000000"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path
									d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
								/>
							</svg>
						</button>
					</div>
				</div>

				<div id="second">
					<div id="containerTwo">
						<h3 id="question">
							如何報名參加歸化國籍測試？臺北市測試時間為何？
						</h3>
						<p id="answerDetail">
							臺北市「歸化取得我國國籍者基本語言能力及國民權利義務基本常識測試」自104年2月起改採隨到隨辦方式舉行，報名時間為本市各區戶政事務所辦公時間(週一至週五，8：30至17：30)，請攜帶下列證件向本市各區任一戶政事務所報名：
							1.持有效之外僑居留證或外僑永久居留證正本
							2.最近2年內所攝正面半身彩色相片1張（比照國民身分證相片規格）
							3.測試規費新臺幣500元整
						</p>
						<p id="detail">
							網址：https://ca.gov.taipei/News_Content.aspx?n=59F2E04A34FDA3E8&sms=87415A8B9CE81B16&s=5D8A7D937F7B1
						</p>
					</div>
					<div id="fontRemove">
						<button id="removeBtn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="#000000"
							>
								<path d="M0 0h24v24H0V0z" fill="none" />
								<path
									d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.rightWrapper {
	display: block;
	margin-left: 40px;
	margin-right: 40px;
}
.content {
	width: 100%;
	max-width: 1500px;
	height: auto;
	border: 10px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 222px 1fr;
}
.content {
	width: 100%;
	max-width: 1500px;
	height: auto;
	border: 10px;
	margin-top: 30px;
	margin-left: auto;
	margin-right: auto;
	display: grid;
	grid-template-columns: 222px 1fr;
}
.category {
	width: 222px;
	height: 540px;
	background: #555;
	border-radius: 20px;
	margin-top: 15px;
	color: #ffffff;
}
.category h2 {
	color: #ffffff;
}
.hotQuestion {
	width: 1050px;
	height: 340px;
	border-radius: 20px;
	background: #ececec;
	margin-top: 15px;
	padding-top: 2px;
}
.threespure {
	display: flex;
	justify-content: space-between;
}

#topOne {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topTwo {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topThree {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}
h2 {
	margin: 15px;
	color: black;
	font-size: 24px;
}
.answer {
	width: 1050px;
	height: auto;
	border-radius: 20px;
	background: #ececec;
	margin-top: 10px;
	padding-top: 2px;
	padding-bottom: 2px;
	margin-bottom: 10px;
	overflow: hidden;
}
#topOne {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topTwo {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}

#topThree {
	width: 300px;
	height: 250px;
	background: #ffffff;
	margin-right: 15px;
	margin-left: 15px;
	border-radius: 10px;
	overflow-y: auto;
}
p {
	text-align: left;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	width: 270px;
	font-size: 20px;
	color: black;
}
#question {
	width: 940px;
	font-size: 20px;
	text-align: left;
	margin-left: 10px;
	color: black;
	margin-right: 30px;
}
#first {
	width: 1020px;
	height: auto;
	border-radius: 5px;
	background: #ffffff;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
}

#second {
	width: 1020px;
	height: auto;
	border-radius: 5px;
	background: #ffffff;
	margin-top: 8px;
	margin-bottom: 8px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: left;
}
#answerDetail {
	width: 940px;
	font-size: 16px;
	text-align: left;
	color: #393939;
	margin-left: 10px;
}

#detail {
	width: 940px;
	font-size: 16px;
	text-align: left;
	color: #6e6e6e;
	margin-left: 10px;
}
#plusBtn {
	background: #ffffff;
	border: none;
	float: right;
	display: table-cell;
	vertical-align: middle;
}
#fontPlus {
	display: flex;
	justify-content: center;
}

#removeBtn {
	background: #ffffff;
	border: none;
	float: right;
	display: table-cell;
	vertical-align: middle;
}

#fontRemove {
	display: flex;
	align-items: center;
}
h3 {
	margin-top: 5px;
	margin-bottom: 5px;
}
</style>
