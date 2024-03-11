type ItemID = number;
type ItemType = "job" | "story" | "comment" | "poll" | "pollopt";

interface Item {
  id: ItemID; // The item's unique id.
  deleted?: boolean; // true if the item is deleted.
  type?: ItemType; // The type of item. One of "job", "story", "comment", "poll", or "pollopt".
  by?: string; // The username of the item's author.
  time?: number; // Creation date of the item, in Unix Time.
  text?: string; // The comment, story or poll text. HTML.
  dead?: boolean; // true if the item is dead.
  parent?: ItemID; // The comment's parent: either another comment or the relevant story.
  poll?: ItemID; // The pollopt's associated poll.
  kids?: ItemID[]; // The ids of the item's comments, in ranked display order.
  url?: string; // The URL of the story.
  score?: number; // The story's score, or the votes for a pollopt.
  title?: string; // The title of the story, poll or job. HTML.
  parts?: ItemID[]; // A list of related pollopts, in display order.
  descendants?: number; // In the case of stories or polls, the total comment count.
}

export type { ItemID, ItemType, Item };
