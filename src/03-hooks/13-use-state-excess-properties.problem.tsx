import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

export const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div>
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState((currentState): TagState => ({
                ...currentState,
                // @ts-expect-error
                tagselected: tag.id,
              }));
            }}
          >
            {tag.value}
          </button>
        );
      })}
      <button
        onClick={() => {
          setState((currentState): TagState => ({
            ...currentState,
            tags: [
              ...currentState.tags,
              {
                id: new Date().getTime(),
                value: "New",
                // @ts-expect-error
                otherValue: "something",
              },
            ],
          }));
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

// TS knowledge: In TS you are allowed to pass excess properties from the return values inside functions. 
// TS doesn't check for excess properties that time by default

// To avoid the issue try to type the return value of the function which should solve this.

// So in TS functions typings tends to be little bit more linient

// In general in TS world, you should try to make ts do object comparison rather than function ones.