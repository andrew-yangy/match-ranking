import { MatchRankingPage } from './app.po';

describe('match-ranking App', () => {
  let page: MatchRankingPage;

  beforeEach(() => {
    page = new MatchRankingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
