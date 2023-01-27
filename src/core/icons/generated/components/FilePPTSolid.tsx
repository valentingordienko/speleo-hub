import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePPTSolid.svg';

export function FilePPTSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FilePPTSolid">
      <SVG />
    </Icon>
  );
}
