import React from 'react';
import ButtonField from '../../components/Button';
import { connect } from 'react-redux';
import { getProducts } from '../../store/saga/products/action';
interface Props {
  [key: string]: any;
}
const SubscribePage = (props: Props) => {
  const ClickHandler = () => {
    props.getProducts(props.history);
  };
  return (
    <>
      <div>Home Page</div>
      <h4>bienvenu dans notre store</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
        vestibulum sem. Suspendisse dictum hendrerit aliquet. Donec blandit
        lectus ac mi fermentum interdum. Cras dictum pulvinar tortor. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Maecenas at ligula
        a tortor tincidunt ultrices. Sed facilisis lorem erat. Duis quam justo,
        laoreet vel mi ut, cursus ullamcorper nulla. Integer eu quam vel nunc
        congue efficitur. Suspendisse euismod mollis lectus, ut scelerisque diam
        aliquet quis. Ut efficitur risus non ante dapibus fermentum. Nullam
        feugiat lectus eget orci sagittis, nec gravida libero tempus. Morbi vel
        augue dui.
      </p>
      <ButtonField type="button" clickHandler={ClickHandler}>
        start shopping
      </ButtonField>
    </>
  );
};

const mapDispatchToState = {
  getProducts,
};
export default connect(null, mapDispatchToState)(SubscribePage);
