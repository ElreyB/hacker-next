import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import styled from 'styled-components';
import StoryList from '../components/StoryList';

const Title = styled.h1``;

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const responds = await fetch(
        'https://node-hnapi.herokuapp.com/news?page=1'
      );
      stories = await responds.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return {
      stories
    };
  }
  render() {
    const { stories } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={502} />;
    }
    return (
      <div>
        <Title>Hacker Next</Title>
        <StoryList stories={stories} />
      </div>
    );
  }
}

export default Index;
