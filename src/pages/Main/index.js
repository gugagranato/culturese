/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BooksActions from "~/store/ducks/books";

import {
  Container,
  BookList,
  PageTitle,
  Book,
  Info,
  Title,
  Page,
  Author,
  Categorie,
  Image
} from "./styles";

class Main extends Component {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { books } = this.props;
    console.log("data", books);

    return (
      <Container>
        <BookList
          ListHeaderComponent={() => <PageTitle>Livros do Sorteio</PageTitle>}
          data={books.data}
          keyExtractor={book => String(book.isbn)}
          renderItem={({ item: book }) => (
            <Book onPress={() => {}}>
              <Image source={{ uri: book.thumbnailUrl }} />
              <Info>
                <Title>{book.title}</Title>
                <Author>{`Autor: ${book.authors}`}</Author>
                <Categorie>{`Categoria: ${book.categories}`}</Categorie>
                <Page>{`Páginas: ${book.pageCount}`}</Page>
              </Info>
            </Book>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BooksActions, dispatch);

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(Main);
