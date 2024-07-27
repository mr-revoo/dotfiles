vim.keymap.set("n", "<leader>bd", ":bd<CR>")

-- Key mappings for copying (yanking) and cutting (deleting)
vim.keymap.set('n', '<C-c>', '"+y')   -- Copy to system clipboard in normal mode
vim.keymap.set('v', '<C-c>', '"+y')   -- Copy to system clipboard in visual mode
vim.keymap.set('n', '<C-x>', '"+d')   -- Cut to system clipboard in normal mode
vim.keymap.set('v', '<C-x>', '"+d')   -- Cut to system clipboard in visual mode

-- Key mapping for pasting from the system clipboard
vim.keymap.set('n', '<C-v>', '"+p')   -- Paste from system clipboard in normal mode
vim.keymap.set('v', '<C-v>', '"+p')   -- Paste from system clipboard in visual mode

-- Key mapping to make the current file executable
vim.keymap.set("n", "<leader>+x", "<cmd>!chmod +x %<CR>", { silent = true, desc = "chmod +x current_file" })
