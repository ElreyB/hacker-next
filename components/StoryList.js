import styled from 'styled-components';
import Link from 'next/link';

const StoryListContainer = styled.div`
  padding: 0 1em;
`;

const StoryListItem = styled.div`
  padding: 1em 0;
`;

const StoryTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const StoryLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StoryDetails = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  span {
    margin-right: 1em;
  }
  a {
    color: #6600ff;
    text-decoration: none;
  }
`;

const StoryList = ({ stories }) => (
  <StoryListContainer>
    {stories.map(story => (
      <StoryListItem key={story.id}>
        <StoryTitle>
          <Link href={story.url}>
            <StoryLink href="">{story.title}</StoryLink>
          </Link>
        </StoryTitle>
        <StoryDetails>
          <span>{story.points || 0} points</span>
          <Link href={`/story?id=${story.id}`}>
            <StoryLink>{story.comments_count || 0} comments</StoryLink>
          </Link>
        </StoryDetails>
      </StoryListItem>
    ))}
  </StoryListContainer>
);

export default StoryList;
