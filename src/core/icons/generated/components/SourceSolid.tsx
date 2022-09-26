import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SourceSolid.svg';

export function SourceSolid(props: TProps) {
  return (
    <Icon {...props} name="SourceSolid">
      <SVG />
    </Icon>
  );
}
