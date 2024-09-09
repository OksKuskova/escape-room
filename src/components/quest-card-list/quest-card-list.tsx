import { useQuestsByFilter } from '../../hooks/use-quests-by-filter';
import QuestCard from '../quest-card/quest-card';

function QuestCardList(): JSX.Element {
  const { quests } = useQuestsByFilter();

  return (
    <div className="cards-grid">
      {quests.map((quest) => <QuestCard key={quest.id} quest={quest} />)}
    </div>
  );
}

export default QuestCardList;
