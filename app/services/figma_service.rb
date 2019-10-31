class FigmaService
  include HTTParty
  base_uri "#{Figma::Urls::FIGMA_API_URL}/v1"

  def self.get_colors
    response = get(
      "/files/#{Figma::Ids::FIGMA_FILE_COLORS_ID}",
      headers: {
        'X-Figma-Token' => Figma::Ids::FIGMA_API_ID
      }
    )

    colors = response['document']['children'][0]['children'].map do |child|
      color = child['fills'][0]['color']
      red = color['r'] * 255
      green = color['g'] * 255
      blue = color['b'] * 255
      alpha = color['a']

      {
        id: child['id'],
        name: child['name'],
        main: "rgba(#{red},#{green},#{blue},#{alpha})"
      }
    end

    colors
  end
end
