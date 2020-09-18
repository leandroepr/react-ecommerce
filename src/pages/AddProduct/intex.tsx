import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PagePattern from '../../components/PagePattern';
import { useCrudProduct } from '../../context/CrudContext';
import { useProductList } from '../../context/ProductListContext';
import ProductPrevewCard from './ProductPreviewCard';

import {
  Container,
  Row,
  Form,
  Warpper,
  Preview,
  FormWarpper,
  ActionContainer,
  Button,
} from './styles';

const AddProduct: React.FC = () => {
  const [error, setError] = useState<String | null>(null);
  const [success, setSuccess] = useState<String | null>(null);
  const { productList, setProductList } = useProductList();

  const {
    product,
    setProduct,
    handleAddProduct,
    handleDeleteProduct,
    handleUpdateProduct,
    loading,
    handleClearProduct,
  } = useCrudProduct();

  function handleChange(
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    if (error) setError(null);
    if (success) setError(null);
    const value = evt.target.value;
    setProduct({
      ...product,
      [evt.target.name]: value,
    });
  }

  function handleCategoriesChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const value = evt.target.value;
    if (typeof value === 'undefined') return;
    setProduct({
      ...product,
      categoriesAsString: value,
      categories: value.split(','),
    });
  }

  const history = useHistory();
  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      const isNewProduct = product.id === '';
      isNewProduct
        ? handleAddProduct(product, {
            onSuccess: () => {
              setSuccess('Produto criado com sucesso!');
              setProductList([...productList, product]);
            },
            onError: (error) => {
              setError(error);
            },
          })
        : handleUpdateProduct(product, {
            onSuccess: () => {
              setSuccess('Produto atualizado com sucesso!');
              const newProductList = productList.map((currentProduct) => {
                if (currentProduct.id !== product.id) {
                  return currentProduct;
                }
                return {
                  ...product,
                };
              });
              setProductList(newProductList);
            },
            onError: (error) => {
              setError(error);
            },
          });
    },
    [
      handleAddProduct,
      handleUpdateProduct,
      product,
      productList,
      setProductList,
    ]
  );

  const handleCancelButtonClick = useCallback(() => {
    if (product.id === '') {
      history.go(0);
    } else {
      handleClearProduct();
      history.goBack();
    }
  }, [handleClearProduct, history, product.id]);

  const handleDeleteButtonClick = useCallback(() => {
    handleDeleteProduct(product.id, {
      onSuccess: () => {
        setSuccess('Produto deletado com sucesso!');
      },
      onError: (error) => {
        setError(error);
      },
    });
  }, [handleDeleteProduct, product.id]);

  return (
    <PagePattern>
      <Container>
        <Warpper>
          <Preview>
            <ProductPrevewCard product={product} />
          </Preview>

          <FormWarpper>
            <Row>
              <h1>Cadastro de Produtos</h1>
            </Row>
            <Form>
              <label>
                <input
                  type="text"
                  name="id"
                  hidden
                  value={product.id}
                  readOnly
                />
              </label>

              <label htmlFor="title">
                <span>Título</span>
                <input
                  type="text"
                  name="title"
                  placeholder="Título"
                  value={product.title}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="imageUrl">
                <span>Url da Imagem</span>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="URL da imagem"
                  value={product.imageUrl}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="condition">
                <span>Condição do Produto</span>
                <input
                  type="text"
                  name="condition"
                  placeholder="Condição - ex: Novo | Usado"
                  value={product.condition}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="categoryId">
                <span>Selecione a Categoria</span>
                <select
                  name="categoryId"
                  value={product.categoryId}
                  onChange={handleChange}
                >
                  <option key="roupas" value="roupas">
                    Roupas
                  </option>
                  <option key="calcados" value="calcados">
                    Calçados
                  </option>
                  <option key="utilitarios" value="utilitarios">
                    Utilitários
                  </option>
                </select>
              </label>

              <label htmlFor="categoriesAsString">
                <span>Categoria, Subcategoria e Tags</span>
                <input
                  type="text"
                  name="categoriesAsString"
                  placeholder="Categoria 1, Categoria 2, Categoria n"
                  value={product.categoriesAsString}
                  onChange={handleCategoriesChange}
                />
              </label>

              <label htmlFor="price">
                <span>Preço do produto</span>
                <input
                  type="text"
                  name="price"
                  placeholder="Preço - ex. 19.99"
                  value={product.price}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="installmentsInfo">
                <span>Condições depagamento</span>
                <input
                  type="text"
                  name="installmentsInfo"
                  placeholder="em 12x de R$ 42,42 sem juros"
                  value={product.installmentsInfo}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="soldAmount">
                <span>Quantidade de produtos vendidos</span>
                <input
                  type="number"
                  name="soldAmount"
                  placeholder="Quantidade Vendidos"
                  value={product.soldAmount}
                  onChange={handleChange}
                />
              </label>

              <label htmlFor="stockAmount">
                <span>Quantidade em estoque</span>
                <input
                  type="number"
                  name="stockAmount"
                  placeholder="Quantidade em estoque"
                  value={product.stockAmount}
                  onChange={handleChange}
                />
              </label>

              {loading && <p>Loading...</p>}
              {error && <p>{error}</p>}
              {success && <p>{success}</p>}
              <ActionContainer>
                <Button
                  style={product.id === '' ? { display: 'none' } : undefined}
                  onClick={handleDeleteButtonClick}
                >
                  Deletar
                </Button>
                <div>
                  <Button onClick={handleCancelButtonClick}>Cancelar</Button>
                  <Button onClick={handleSubmit} solid>
                    Salvar
                  </Button>
                </div>
              </ActionContainer>
            </Form>
          </FormWarpper>
        </Warpper>
      </Container>
    </PagePattern>
  );
};

export default AddProduct;
