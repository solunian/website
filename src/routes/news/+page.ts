import type { PageLoad } from "./$types";

// loading only on client, not on server?
// export const ssr = false;

const get_filter_url = (query_param: string): string => {
  if (query_param === "top") {
    return "https://hacker-news.firebaseio.com/v0/topstories.json";
  } else if (query_param === "new") {
    return "https://hacker-news.firebaseio.com/v0/newstories.json";
  } else if (query_param === "best") {
    return "https://hacker-news.firebaseio.com/v0/beststories.json";
  } else {
    // top is default
    return "https://hacker-news.firebaseio.com/v0/topstories.json";
  }
};

export const load: PageLoad = async ({ url }) => {
  const fetch_url = get_filter_url(url.searchParams.get("filter") ?? "");
  return {
    fetch_url,
  };
};

/*
https://hacker-news.firebaseio.com/v0/topstories.json
https://hacker-news.firebaseio.com/v0/newstories.json
https://hacker-news.firebaseio.com/v0/beststories.json

const get_filter_url = (query_param: string): string => {
  if (query_param === "top") {
    return "https://hacker-news.firebaseio.com/v0/topstories.json";
  } else if (query_param === "new") {
    return "https://hacker-news.firebaseio.com/v0/newstories.json";
  } else if (query_param === "best") {
    return "https://hacker-news.firebaseio.com/v0/beststories.json";
  } else {
    // top is default
    return "https://hacker-news.firebaseio.com/v0/topstories.json";
  }
};

type ItemType = "job" | "story" | "comment" | "poll" | "pollopt";
type ItemID = number;

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

export const load: PageLoad = async ({ fetch, url }) => {
  let ok = true;
  let item_list: Promise<Item[]> | undefined;

  try {
    const fetch_url = get_filter_url(url.searchParams.get("filter") ?? "");
    const item_id_list: ItemID[] = await (await fetch(fetch_url)).json();

    const item_promises = item_id_list
      .slice(0, 30)
      .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
    const item_responses = await Promise.all(item_promises);
    item_list = Promise.all(item_responses.map(async (res) => await res.json()));
  } catch (err) {
    ok = false;
  }

  return {
    ok,
    item_list,
  };
};

*/
