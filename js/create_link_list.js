let link_list = document.querySelector("#link_list");
let week_lower_bound = 6;
let week_upper_bound = 13;

for (let week_num = week_lower_bound; week_num <= week_upper_bound; week_num++){
    let li_container = document.createElement("li");
    let link_container = document.createElement("a");
    link_container.href = `weeks/week${week_num}/week${week_num}.html`;
    link_container.innerHTML = `Week ${week_num}`;
    link_list.append(li_container);
    link_list.lastChild.append(link_container);
}
let end_statement = document.createElement("li");
end_statement.innerHTML = "(This list is subject to change as the assignments become completed...)"
link_list.append(end_statement)