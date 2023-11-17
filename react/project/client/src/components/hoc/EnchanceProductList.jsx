import { WithProductList } from './WithProductList';
import ProductListComponent from './ProductListComponent';
import { Products } from '../../SharedData';

const EnchanceProductList = WithProductList(ProductListComponent, Products)

export default EnchanceProductList;