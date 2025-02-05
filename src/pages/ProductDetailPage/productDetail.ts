import { createHeader } from '../../components/heeder/header';
import { renderProductDetail } from '../../components/addToCart/addToCart';
import { fetchProduct } from '../../components/addToCart/addToCart';
import { createFooter } from '../../components/footer/footer';
import { createProductImagesSection } from '../../components/productImages/productImages';


createHeader();
const productImageSection = await createProductImagesSection();
document.body.appendChild(productImageSection);

// renderProductDetail();
// export async function renderProductDetail(productId: string): Promise<HTMLElement> {
//     const section = document.createElement('section');
//     section.classList.add('product-detail-page'); 
  
//     const product = await fetchProduct(productId);
//     section.appendChild(renderProduct(product)); 
//     console.log('Рендеринг продукта:', productId);
//     return section;
//   }
  
createFooter();

