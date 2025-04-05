return {
	"andweeb/presence.nvim",
	config = function()
		require("presence").setup({
			main_image = "file",
			neovim_image_text = "Helll",
			-- blacklist = {'c', 'h'}
		})
	end,
}
