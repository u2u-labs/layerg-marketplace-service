enum AnalysisType {
  ONEHOUR = 'ONEHOUR',
  ONEDAY = 'ONEDAY',
  ONEWEEK = 'ONEWEEK',
  ONEMONTH = 'ONEMONTH',
  THREEMONTHS = 'THREEMONTHS',
  SIXMONTHS = 'SIXMONTHS',
  ONEYEAR = 'ONEYEAR',
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
