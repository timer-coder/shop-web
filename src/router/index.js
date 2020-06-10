import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import HomeLogin from '../components/HomeLogin.vue'
import SignUp from '../components/SignUp.vue'
import UserHome from '../components/UserHome.vue'
import HaveBuy from '../components/HaveBuy.vue'
import HaveSell from '../components/HaveSell.vue'
import Like from '../components/Like.vue'
import SellingGoods from '../components/SellingGoods.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import HaveLook from '../components/HaveLook.vue'
import Order from '../components/Order.vue'
import Ask from '../components/Ask.vue'
import GoodsKinds from '../components/GoodsKinds.vue'
import AddGoods from '../components/AddGoods.vue'
import DeleteGoods from '../components/DeleteGoods.vue'
import AddOrders from '../components/AddOrders.vue'
import Accessory from '../clothes/Accessory.vue'
import BoyShirt from '../clothes/BoyShirt.vue'
import BoySpecial from '../clothes/BoySpecial.vue'
import BoySuit from '../clothes/BoySuit.vue'
import BoyTrouses from '../clothes/BoyTrouses.vue'
import Bras from '../clothes/Bras.vue'
import Eyeglasses from '../clothes/Eyeglasses.vue'
import GirlShirt from '../clothes/GirlShirt.vue'
import GirlSkirt from '../clothes/GirlSkirt.vue'
import GirlSpecial from '../clothes/GirlSpecial.vue'
import GirlSuit from '../clothes/GirlSuit.vue'
import GirlTrouses from '../clothes/GirlTrouses.vue'
import HomeWear from '../clothes/HomeWear.vue'
import Jewellery from '../clothes/Jewellery.vue'
import Socks from '../clothes/Socks.vue'
import SpecialUnderClothes from '../clothes/SpecialUnderClothes.vue'
import TrendMatching from '../clothes/TrendMatching.vue'
import UnderPants from '../clothes/UnderPants.vue'
import WashingService from '../clothes/WashingService.vue'
import Watch from '../clothes/Watch.vue'
import BedClothes from '../dailyuse/BedClothes.vue'
import Book from '../dailyuse/Book.vue'
import Cleaner from '../dailyuse/Cleaner.vue'
import Cooker from '../dailyuse/Cooker.vue'
import Curtain from '../dailyuse/Curtain.vue'
import DinnerWare from '../dailyuse/DinnerWare.vue'
import DIY from '../dailyuse/DIY.vue'
import EverydayUse from '../dailyuse/EverydayUse.vue'
import Gift from '../dailyuse/Gift.vue'
import GreenPet from '../dailyuse/GreenPet.vue'
import HomeDecoration from '../dailyuse/HomeDecoration.vue'
import Stationery from '../dailyuse/Statinery.vue'
import StorageBox from '../dailyuse/StorageBox.vue'
import ApplianceService from '../electrical appliances/ApplianceService.vue'
import BigLivingAppliances from '../electrical appliances/BigLivingAppliances.vue'
import BusinessOffice from '../electrical appliances/BusinessOffice.vue'
import Camera from '../electrical appliances/Camera.vue'
import DigitalAccessory from '../electrical appliances/DigitalAccessory.vue'
import DigitalService from '../electrical appliances/DigitalService.vue'
import KitchenBigAppliances from '../electrical appliances/KitchenBigAppliances.vue'
import KitchenSmallAppliances from '../electrical appliances/KitchenSmallAppliances.vue'
import Laptop from '../electrical appliances/Laptop.vue'
import LivingAppliances from '../electrical appliances/LivingAppliances.vue'
import MusicalInstrument from '../electrical appliances/MusicalInstrument.vue'
import NetworkProducts from '../electrical appliances/NetworkProducts.vue'
import PersonalCareAppliances from '../electrical appliances/PersonalCareAppliances.vue'
import SmartDevices from '../electrical appliances/SmartDevices.vue'
import VoiceBox from '../electrical appliances/VoiceBox.vue'
import BakingMaterial from '../food/BakingMaterial.vue'
import DryGoods from '../food/DryGoods.vue'
import FastFood from '../food/FastFood.vue'
import FoodGift from '../food/FoodGift.vue'
import FoodRation from '../food/FoodRation.vue'
import InstantDrink from '../food/InstantDrink.vue'
import MilkDrink from '../food/MilkDrink.vue'
import Snacks from '../food/Snacks.vue'
import Tea from '../food/Tea.vue'
import Wine from '../food/Wine.vue'
import FreshAquatic from '../fresh/FreshAquatic.vue'
import FreshEggs from '../fresh/FreshEggs.vue'
import FreshFood from '../fresh/FreshFood.vue'
import FreshFruits from '../fresh/FreshFruits.vue'
import FreshMeat from '../fresh/FreshMeat.vue'
import FreshVegetables from '../fresh/FreshVegetables.vue'
import SeasonFresh from '../fresh/SeasonFresh.vue'
import BathProducts from '../personal care/BathProducts.vue'
import BeautyBody from '../personal care/Beauty&Body.vue'
import CleaningService from '../personal care/CleaningService.vue'
import FemanCare from '../personal care/FemanCare.vue'
import HairCare from '../personal care/HairCare.vue'
import HomeCleaner from '../personal care/HomeCleaner.vue'
import MakeUp from '../personal care/MakeUp.vue'
import Paper from '../personal care/Paper.vue'
import SkinCare from '../personal care/SkinCare.vue'
import Apple from '../phone/Apple.vue'
import EarPhone from '../phone/Earphone.vue'
import FlowRecharge from '../phone/FlowRecharge.vue'
import HuaWei from '../phone/HuaWei.vue'
import MI from '../phone/MI.vue'
import OPPO from '../phone/OPPO.vue'
import OtherBrandPhone from '../phone/OtherBrandPhone.vue'
import PhoneElse from '../phone/PhoneElse.vue'
import PhoneHolder from '../phone/PhoneHolder.vue'
import PhoneRepair from '../phone/PhoneRepair.vue'
import PhoneShell from '../phone/PhoneShell.vue'
import PortableBattery from '../phone/PortableBattery.vue'
import PrepairRefill from '../phone/PrepairRefill.vue'
import Samsung from '../phone/Samsung.vue'
import ScreenProtector from '../phone/ScreenProtector.vue'
import SelfieStick from '../phone/SelfieStick.vue'
import TrafficCard from '../phone/TrafficCard.vue'
import USB from '../phone/USB.vue'
import VIVO from '../phone/VIVO.vue'
import BoyKnapsack from '../shoes&bags/BoyKnapsack.vue'
import BoyShoe from '../shoes&bags/BoyShoe.vue'
import GirlKnapsack from '../shoes&bags/GirlKnapsack.vue'
import GirlShoe from '../shoes&bags/GirlShoe.vue'
import Luggage from '../shoes&bags/Luggage.vue'
import SpecialKnapsack from '../shoes&bags/SpecialKnapsack.vue'
import SpecialShoe from '../shoes&bags/SpecialShoe.vue'
import Exercise from '../sports/Exercise.vue'
import MinoritySports from '../sports/MinoritySports.vue'
import OutdoorTourism from '../sports/OutdoorTourism.vue'
import OutsideSports from '../sports/OutsideSports.vue'
import SportsBags from '../sports/SportsBags.vue'
import SportsClothes from '../sports/SportsClothes.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/homelogin', component: HomeLogin },
  { path: '/signup', component: SignUp },
  { path: '/userhome', component: UserHome },
  { path: '/havebuy', component: HaveBuy },
  { path: '/havesell', component: HaveSell },
  { path: '/like', component: Like },
  { path: '/sellinggoods', component: SellingGoods },
  { path: '/shoppingcart', component: ShoppingCart },
  { path: '/havelook', component: HaveLook },
  { path: '/order', component: Order },
  { path: '/ask', component: Ask },
  { path: '/goodskinds', component: GoodsKinds },
  { path: '/addgoods', component: AddGoods },
  { path: '/deletegoods', component: DeleteGoods },
  { path: '/addorders', component: AddOrders },
  { path: '/accessory', component: Accessory },
  { path: '/boyshirt', component: BoyShirt },
  { path: '/boyspecial', component: BoySpecial },
  { path: '/boysuit', component: BoySuit },
  { path: '/boytrouses', component: BoyTrouses },
  { path: '/bras', component: Bras },
  { path: '/eyeglasses', component: Eyeglasses },
  { path: '/girlshirt', component: GirlShirt },
  { path: '/girlskirt', component: GirlSkirt },
  { path: '/girlspecial', component: GirlSpecial },
  { path: '/girlsuit', component: GirlSuit },
  { path: '/girltrouses', component: GirlTrouses },
  { path: '/homewear', component: HomeWear },
  { path: '/jewellery', component: Jewellery },
  { path: '/socks', component: Socks },
  { path: '/specialunderclothes', component: SpecialUnderClothes },
  { path: '/trendmatching', component: TrendMatching },
  { path: '/underpants', component: UnderPants },
  { path: '/washingservice', component: WashingService },
  { path: '/watch', component: Watch },
  { path: '/bedclothes', component: BedClothes },
  { path: '/book', component: Book },
  { path: '/cleaner', component: Cleaner },
  { path: '/cooker', component: Cooker },
  { path: '/curtain', component: Curtain },
  { path: '/dinnerware', component: DinnerWare },
  { path: '/diy', component: DIY },
  { path: '/everydayuse', component: EverydayUse },
  { path: '/gift', component: Gift },
  { path: '/greenpet', component: GreenPet },
  { path: '/homedecoration', component: HomeDecoration },
  { path: '/stationery', component: Stationery },
  { path: '/storageBox', component: StorageBox },
  { path: '/applianceservice', component: ApplianceService },
  { path: '/biglivingappliances', component: BigLivingAppliances },
  { path: '/businessoffice', component: BusinessOffice },
  { path: '/camera', component: Camera },
  { path: '/digitalaccessory', component: DigitalAccessory },
  { path: '/digitalservice', component: DigitalService },
  { path: '/kitchenbigappliances', component: KitchenBigAppliances },
  { path: '/kitchensmallappliances', component: KitchenSmallAppliances },
  { path: '/laptop', component: Laptop },
  { path: '/livingappliances', component: LivingAppliances },
  { path: '/musicalinstrument', component: MusicalInstrument },
  { path: '/networkproducts', component: NetworkProducts },
  { path: '/personalcareappliances', component: PersonalCareAppliances },
  { path: '/smartdevices', component: SmartDevices },
  { path: '/voicebox', component: VoiceBox },
  { path: '/bakingmaterial', component: BakingMaterial },
  { path: '/drygoods', component: DryGoods },
  { path: '/fastfood', component: FastFood },
  { path: '/foodgift', component: FoodGift },
  { path: '/foodration', component: FoodRation },
  { path: '/instantdrink', component: InstantDrink },
  { path: '/milkdrink', component: MilkDrink },
  { path: '/snacks', component: Snacks },
  { path: '/tea', component: Tea },
  { path: '/wine', component: Wine },
  { path: '/freshaquatic', component: FreshAquatic },
  { path: '/fresheggs', component: FreshEggs },
  { path: '/freshfood', component: FreshFood },
  { path: '/freshfruits', component: FreshFruits },
  { path: '/freshmeat', component: FreshMeat },
  { path: '/freshvegetables', component: FreshVegetables },
  { path: '/seasonfresh', component: SeasonFresh },
  { path: '/bathproducts', component: BathProducts },
  { path: '/beautybody', component: BeautyBody },
  { path: '/cleaningservice', component: CleaningService },
  { path: '/femancare', component: FemanCare },
  { path: '/haircare', component: HairCare },
  { path: '/homecleaner', component: HomeCleaner },
  { path: '/makeup', component: MakeUp },
  { path: '/paper', component: Paper },
  { path: '/skincare', component: SkinCare },
  { path: '/apple', component: Apple },
  { path: '/earphone', component: EarPhone },
  { path: '/flowrecharge', component: FlowRecharge },
  { path: '/huawei', component: HuaWei },
  { path: '/mi', component: MI },
  { path: '/oppo', component: OPPO },
  { path: '/otherbrandphone', component: OtherBrandPhone },
  { path: '/phoneelse', component: PhoneElse },
  { path: '/phoneholder', component: PhoneHolder },
  { path: '/phonerepair', component: PhoneRepair },
  { path: '/phoneshell', component: PhoneShell },
  { path: '/portablebattery', component: PortableBattery },
  { path: '/prepairrefill', component: PrepairRefill },
  { path: '/sansung', component: Samsung },
  { path: '/screenprotector', component: ScreenProtector },
  { path: '/selfiestick', component: SelfieStick },
  { path: '/trafficcard', component: TrafficCard },
  { path: '/usb', component: USB },
  { path: '/vivo', component: VIVO },
  { path: '/boyknapsack', component: BoyKnapsack },
  { path: '/boyshoe', component: BoyShoe },
  { path: '/girlknapsack', component: GirlKnapsack },
  { path: '/girlshoe', component: GirlShoe },
  { path: '/luggage', component: Luggage },
  { path: '/specialknapsack', component: SpecialKnapsack },
  { path: '/specialshoe', component: SpecialShoe },
  { path: '/exercise', component: Exercise },
  { path: '/minoritysports', component: MinoritySports },
  { path: '/outdoortourism', component: OutdoorTourism },
  { path: '/outsidesports', component: OutsideSports },
  { path: '/sportsbags', component: SportsBags },
  { path: '/sportsclothes', component: SportsClothes }
]

const router = new VueRouter({
  routes
})

export default router
