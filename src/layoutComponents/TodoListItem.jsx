export function TodoListItem({children, isComplete}) {

  // Excercise for Chapter 12 - Props
  return (
    <>
      <div>
        <input type="checkbox" name="checkbox" id="mycheckbox" defaultChecked={isComplete} />
        <label htmlFor="mycheckbox">{children}</label>
      </div>
    </>
  )
}