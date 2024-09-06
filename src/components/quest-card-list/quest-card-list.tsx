import { getQuests } from '../../mocks/short-quests';
import QuestCard from '../quest-card/quest-card';

function QuestCardList(): JSX.Element {
  const quests = getQuests();

  return (
    <div className="cards-grid">
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
    </div>
  );
}

export default QuestCardList;
