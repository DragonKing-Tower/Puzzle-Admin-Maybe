module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	moduleFileExtensions: ["js", "jsx"],
	moduleNameMapper: {
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
