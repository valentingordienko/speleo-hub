import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SourceSolid.svg';

export function SourceSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SourceSolid">
      <SVG />
    </Icon>
  );
}
