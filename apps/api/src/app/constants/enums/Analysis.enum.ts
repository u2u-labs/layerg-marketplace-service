enum AnalysisType {
  ONEHOUR = 'ONEHOUR',
  ONEDAY = 'ONEDAY',
  ONEWEEK = 'ONEWEEK',
  ONEMONTH = 'ONEMONTH',
  ALLTIME = 'ALLTIME',
}

enum AnalysisModeSort {
  floor = 'floor',
  vol = 'vol',
  owner = 'owner',
  items = 'items',
}

enum AnalysisModeMinMax {
  floor = 'floor',
  vol = 'vol',
}

export { AnalysisType, AnalysisModeSort, AnalysisModeMinMax };
